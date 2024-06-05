import os
import shutil
from imutils import paths
import random
import cancernet.config as config

# Obtener la lista de rutas de imágenes en el dataset original
originalPaths = list(paths.list_images(config.INPUT_DATASET))
random.seed(7)
random.shuffle(originalPaths)

# Dividir los datos en conjuntos de entrenamiento, validación y prueba
index = int(len(originalPaths) * config.TRAIN_SPLIT)
trainPaths = originalPaths[:index]
testPaths = originalPaths[index:]

index = int(len(trainPaths) * config.VAL_SPLIT)
valPaths = trainPaths[:index]
trainPaths = trainPaths[index:]

# Definir los conjuntos de datos y sus rutas correspondientes
datasets = [
    ("training", trainPaths, config.TRAIN_PATH),
    ("validation", valPaths, config.VAL_PATH),
    ("testing", testPaths, config.TEST_PATH)
]

# Crear las carpetas correspondientes y copiar las imágenes
for (setType, originalPaths, basePath) in datasets:
    print(f'Building {setType} set')

    if not os.path.exists(basePath):
        os.makedirs(basePath)

    for path in originalPaths:
        file = path.split(os.path.sep)[-1]
        label = file[-5:-4]

        labelPath = os.path.sep.join([basePath, label])
        if not os.path.exists(labelPath):
            print(f'Building directory {labelPath}')
            os.makedirs(labelPath)

        newPath = os.path.sep.join([labelPath, file])
        try:
            shutil.copy2(path, newPath)
        except PermissionError as e:
            print(f'PermissionError: {e}')
            print(f'Failed to copy {path} to {newPath}')
        except Exception as e:
            print(f'Error: {e}')
            print(f'Failed to copy {path} to {newPath}')