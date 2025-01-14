import { modalImage } from './change-image.js';
import { modalOpen } from './popup-image.js';
const FILE_TYPE = ['jpg', 'jpeg', 'png'];
/*Изменение изображение превью*/
const changeInputFile = () => {
  const fileImage = modalOpen.files[0];
  if (fileImage) {
    const fileImageName = fileImage.name.toLowerCase();
    const matches = FILE_TYPE.some((it) => fileImageName.endsWith(it));
    if (matches) {
      modalImage.src = URL.createObjectURL(fileImage);
    }
  }
};
export { changeInputFile };
