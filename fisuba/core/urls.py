from rest_framework import routers
from .api import MateriasViewSet


router = routers.DefaultRouter()
router.register('api/materias', MateriasViewSet, 'materias')

urlpatterns = router.urls
