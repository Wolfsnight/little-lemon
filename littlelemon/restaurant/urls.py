from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('api/menu-items/', views.MenuItemsView.as_view(), name='menu_items'),
    path('api/menu-items/<int:pk>/', views.SingleMenuItemView.as_view(), name='menu_item_detail'),
]
