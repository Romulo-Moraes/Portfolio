var ViewportScroll = (() => {
    let instance;

    function constructor(){
        let arrayOfElements = [];
        let classDelays = {};

        this.show = () => {
            console.log(arrayOfElements);;
        }

        let showElements = (elements) => {
            let i = 0;

            while(i < elements.length){
                if(isInViewport(elements[i])){
                    elements[i].style.opacity = 1;

                    i++;
                }else{
                    i++;
                }
            }
        };

        let scrollHandler = () => {
            showElements(arrayOfElements);
        };

        window.addEventListener('scroll', scrollHandler);

        this.addClasses = (classes, delay) => {
            classes.forEach((elementClass) => {
                let elements = Array.from(document.getElementsByClassName(elementClass));

                classDelays[elementClass] = delay;

                showElements(elements);

                arrayOfElements = arrayOfElements.concat(elements);
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

    return {
        addClasses : (classes, delay) => {
            if(instance === undefined){
                instance = new constructor();
            }

            instance.addClasses(classes, delay);
        },

        show : () => {
            instance.show();
        }
    }
})();

