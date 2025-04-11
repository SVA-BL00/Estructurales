interface Coffee{
    getDescription(): string;
    price(): number;
}

class Base implements Coffee{
    getDescription(): string{
        return 'Expreso';
    }

    price(): number{
        return 1.5;
    }
}

abstract class Decorator implements Coffee{
    protected decoratedCoffee: Coffee;
    
    constructor(coffee: Coffee){
        this.decoratedCoffee = coffee;
    }
    
    getDescription(): string{
        return this.decoratedCoffee.getDescription();
    }
    
    price(): number{
        return this.decoratedCoffee.price();
    }
}

class MilkDecorator extends Decorator{
    constructor(coffee: Coffee){
        super(coffee);
    }
    
    getDescription(): string{
        return this.decoratedCoffee.getDescription() + " + Leche";
    }
    
    price(): number{
        return this.decoratedCoffee.price() + 1.5;
    }
}

class ChocolateDecorator extends Decorator{
    constructor(coffee: Coffee){
        super(coffee);
    }
    
    getDescription(): string{
        return this.decoratedCoffee.getDescription() + " + Chocolate";
    }
    
    price(): number{
        return this.decoratedCoffee.price() + 0.7;
    }
}

class CinnamonDecorator extends Decorator{
    constructor(coffee: Coffee){
        super(coffee);
    }
    
    getDescription(): string{
        return this.decoratedCoffee.getDescription() + " + Canela";
    }
    
    price(): number{
        return this.decoratedCoffee.price() + 0.5;
    }
}

function main(){
    function displayOrder(coffee: Coffee): void{
        console.log(`Pedido: ${coffee.getDescription()}`);
        console.log(`Precio: $${coffee.price().toFixed(2)}`);
    }
    
    const normal = new Base();
    displayOrder(normal);
    
    const latte = new MilkDecorator(new Base());
    displayOrder(latte);
    
    const latteCanela = new CinnamonDecorator(new MilkDecorator(new Base()));
    displayOrder(latteCanela);
    
    const conTodo = new CinnamonDecorator(new ChocolateDecorator(new MilkDecorator(new Base())));
    displayOrder(conTodo);
}

main();