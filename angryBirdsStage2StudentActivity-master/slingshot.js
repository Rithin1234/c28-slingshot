class Slingshot{
    constructor(bodyA,pointB){
        var optins = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.02,
            length:10
        }
        this.pointB = pointB 
        this.slingshot = Constraint.create(optins)
        World.add(world,this.slingshot)
    }
    fly(){
        this.slingshot.bodyA = null
    }
    display(){
        if(this.slingshot.bodyA){

        
        strokeWeight(3)
    line(this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
    }
}