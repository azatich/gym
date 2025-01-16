from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

CustomUser = get_user_model()


class Register(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "User registered successfully!"},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Login(APIView):
    def post(self, request):
        email_or_username = request.data.get("email_or_username")
        password = request.data.get("password")

        if not email_or_username or not password:
            return Response(
                {"error": "Email or Username and password are required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            user = CustomUser.objects.get(email=email_or_username)
            username = user.username
        except CustomUser.DoesNotExist:
            username = email_or_username

        user = authenticate(username=username, password=password)

        if user:
            return Response(
                {
                    "message": "Login successful!",
                    "user": {"username": user.username, "email": user.email},
                },
                status=status.HTTP_200_OK,
            )
        return Response(
            {"detail": "Invalid email/username or password."},
            status=status.HTTP_401_UNAUTHORIZED,
        )
