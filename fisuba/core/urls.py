from rest_framework import routers
from .api import MateriasViewSet, GuiasViewSet, ExamenesViewSet, EjerciciosGuiasViewSet, EjerciciosExamenesViewSet


router = routers.DefaultRouter()
router.register('api/materias', MateriasViewSet, 'materias')
router.register('api/guias', GuiasViewSet, 'guias')
router.register('api/examenes', ExamenesViewSet, 'examenes')
router.register('api/ejerciciosguias', EjerciciosGuiasViewSet, 'ejerciciosguias')
router.register('api/ejerciciosexamenes', EjerciciosExamenesViewSet, 'ejerciciosexamenes')

urlpatterns = router.urls
