import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryCont = document.querySelector(".gallery")


galleryCont.insertAdjacentHTML('beforeend', markupGallery(galleryItems));

function markupGallery(galleryItems) { 
    return galleryItems.map(({description, original, preview}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join("");
};


galleryCont.addEventListener('click', ImageClick)

function ImageClick(e) { 
    e.preventDefault();
    if (e.target.nodeName !=="IMG") { 
        return
    } 
    const pictureLink = e.target.dataset.source;
   modalWindow(pictureLink)
};

function modalWindow(source) { 
     const instance = basicLightbox.create(`<img src="${source}">`);
     instance.show()

     document.addEventListener('keydown', e => { 
        if (e.code !== "Escape") { 
            return
        }
        instance.close();
        document.removeEventListener('keydown', e);
     })
}


console.log(galleryItems);
