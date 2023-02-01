from rest_framework.response import Response
from .models import Gallery
from rest_framework.decorators import api_view
from rest_framework import status
from .serializer import GallerySerializer

# Create your views here.
@api_view(['GET','POST','PUT','DELETE'])
def gallery(request,id=-1):
    if request.method == 'GET':
        all_products = GallerySerializer(Gallery.objects.all(), many=True).data
        return Response(all_products)
    elif request.method == 'POST':
        mySerializer = GallerySerializer(data=request.data)
        if mySerializer.is_valid():
            mySerializer.save()
            return Response (status=status.HTTP_201_CREATED)
        else:
            print(mySerializer.errors)
            return Response (status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PUT':
        if int(id) > -1:
            try:
                old = Gallery.objects.get(id=int(id))
            except Gallery.DoesNotExist:
                return Response (status=status.HTTP_404_NOT_FOUND)
            new = GallerySerializer(data = request.data)
            new.update(old, request.data)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response (status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        if int(id) > -1:
            try:
                mySerializer = Gallery.objects.get(id=int(id))
            except Gallery.DoesNotExist:
                return Response (status=status.HTTP_404_NOT_FOUND)
            mySerializer.delete()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response (status=status.HTTP_400_BAD_REQUEST)