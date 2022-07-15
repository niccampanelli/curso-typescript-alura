export function domInjector(seletor: string){
    return function(
        target: any,
        propertyKey: string
    ) {
        
        let elemento: HTMLInputElement;

        const getter = function(){
            if(!elemento)
                elemento = document.querySelector(seletor) as HTMLInputElement;

            return elemento;
        }

        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}