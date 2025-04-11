interface Ability{
    use(): void;
}

class SwordAttacks implements Ability{
    use(): void{
        console.log('Ataca con una espada');
    }
}

class Health implements Ability{
    use(): void{
        console.log('Recupera salud');
    }
}

abstract class Characters{
    protected ability: Ability;
    constructor(ability: Ability){
        this.ability = ability;
    }

    abstract performAbility(): void;
}

class Warriors extends Characters{
    performAbility(): void{
        console.log("Warrior está atacando");
        this.ability.use();
    }
}

class Wizards extends Characters{
    performAbility(): void{
        console.log("Wizard está atacando");
        this.ability.use();
    }
}

function main(){
    const warrior = new Warriors(new SwordAttacks());
    warrior.performAbility();
}

main();