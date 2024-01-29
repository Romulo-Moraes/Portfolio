var ViewportScroll = (() => {
    const TRANSLATE_OPERATION = 0;
    const FADE_IN_OPERATION = 1;
    const OFFSET = 80;
    let instance;

    function constructor(){
        let arrayOfElements = [];
        
        let showElements = (elements) => {
            let i = 0;
            let j = 0;

            
            while(i < elements.length){
                while(j < elements[i].items.length){
                    if(isInViewport(elements[i].items[j])){
                        let elementToWorkOn = elements[i].items.splice(j, 1)[0];

                        switch(elements[i].operation){
                            case FADE_IN_OPERATION:
                                elementToWorkOn.style.opacity = 1;
                                break;
                            case TRANSLATE_OPERATION:
                                let offset = 80;
                                elementToWorkOn.style.transition = "1s";
                                elementToWorkOn.style.opacity = 1;
                                elementToWorkOn.style.transform = `translateX(0%)`;
                                
                                break;
                        }


                    }else{
                        j++;
                    }
                }

                i++;
                j = 0;
            }
        };

        let scrollHandler = () => {
            showElements(arrayOfElements);
        };

        window.addEventListener('scroll', scrollHandler);

        this.addClassesToFadeIn = (classes, delay) => {
            classes.forEach((elementClass) => {

                let elements = Array.from(document.getElementsByClassName(elementClass));
                
                elements.forEach((element) => {
                    element.style.opacity = 0;
                    element.style.transition = delay;
                });  
                    

                arrayOfElements.push({
                    operation : FADE_IN_OPERATION,
                    items : elements
                });

                showElements(arrayOfElements);
            });
        };

        this.addClassesToTranslate = (classes) => {
            classes.forEach((elementClass) => {
                let elements = Array.from(document.getElementsByClassName(elementClass));
                
                elements.forEach((element) => {
                    element.style.opacity = 0;
                    element.style.transform = `translateX(${OFFSET}%)`;
                })

                arrayOfElements.push({
                    operation : TRANSLATE_OPERATION,
                    items : elements
                })

                showElements(arrayOfElements);
            });
        };

        let isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
        }
        

    }
    
    function createViewportScrollInstance(){
        if(instance === undefined){
            instance = new constructor();
        }
    }

    return {
        addClassesToTranslate : (classes) => {
            createViewportScrollInstance();

            instance.addClassesToTranslate(classes);
        },
        addClassesToFadeIn : (classes, delay) => {
            createViewportScrollInstance();

            instance.addClassesToFadeIn(classes, delay);
        },

        show : () => {
            instance.show();
        }
    }
})();

