from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view

CustomUser = get_user_model()


@api_view(['POST'])
def register_view(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        refresh = RefreshToken.for_user(user)

        return Response(
            {
                "message": "User registered successfully!",
                "access_token": str(refresh.access_token),
                "refresh_token": str(refresh),
            },
            status=status.HTTP_201_CREATED,
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login_view(request):
    email_or_username = request.data.get("email_or_username")
    password = request.data.get("password")

    if not email_or_username or not password:
        return JsonResponse({"detail": "Please provide username and password"}, status=status.HTTP_400_BAD_REQUEST,)

    try:
        user = CustomUser.objects.get(email=email_or_username)
        username = user.username
    except CustomUser.DoesNotExist:
        username = email_or_username

    user = authenticate(username=username, password=password)

    if user is None:
        return JsonResponse({"detail": "invalid credentials"}, status=400)
    login(request, user)
    
    refresh = RefreshToken.for_user(user)
    return Response(
        {
            "access_token": str(refresh.access_token),
            "refresh_token": str(refresh),
            "username": user.username,
            "email": user.email,
        },
        status=status.HTTP_200_OK,
    )


@api_view(['GET'])
def logout_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({"detail": "you are not logged in"}, status=400)
    logout(request)
    return JsonResponse({"detail": "successfully logged out"})


def session_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({"isAuthenticated": False})
    return JsonResponse({"isAuthenticated": True})


@api_view(['GET'])
def whoami_view(request):
    user = request.user
    return Response(
        {"username": user.username, "email": user.email},
        status=status.HTTP_200_OK,
    )
