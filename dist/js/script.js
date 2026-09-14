// Pré visualiza a camera
        let currentFacingMode = 'environment';
        const videoPreview = document.querySelector('#video-preview');

        const startCamera = (facingMode = 'environment') => {
            stopCamera();
            navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode,
                    width: {
                        max: 1980,
                        ideal: 874
                    },
                    height: {
                        max: 1080,
                        ideal: 402
                    }
                }
            }).then((stream) => {
                videoPreview.srcObject = stream;
            })
        }

        const stopCamera = () => {
            if (videoPreview.srcObject) {
                const stream = videoPreview.srcObject;
                const tracks = stream.getTracks().forEach((track) => track.stop());
            }
        }

        startCamera(currentFacingMode);

        // tirar uma foto
        const btnCamera = document.querySelector('#btn-camera');
        const canvas = document.querySelector('#canvas');
        const videoPreviewContainer = document.querySelector('#video-preview-container');
        const photoPreviewContainer = document.querySelector('#photo-preview-container');
        const photoPreview = document.querySelector('#photo-preview');

        btnCamera.addEventListener('click', () => {
            canvas.width = videoPreview.videoWidth;
            canvas.height = videoPreview.videoHeight;
            const context = canvas.getContext('2d');

            context.drawImage(videoPreview, 0, 0);

            canvas.toBlob((blob) => {
                photoPreview.src = URL.createObjectURL(blob);
                photoPreviewContainer.classList.replace('hidden', 'flex');
                videoPreviewContainer.classList.toggle('hidden');
            });
        });

        // Troca entre as cameras
        const btnToggleCamera = document.querySelector('#btn-toggle-camera');
        btnToggleCamera.addEventListener('click', () => {
            if (currentFacingMode == 'environment') {
                currentFacingMode = 'user';
            } else {
                currentFacingMode = 'environment'
            }

            startCamera(currentFacingMode);
        })