class Wire{

    constructor(pointA,pointB){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length: 500,
            
            stiffness:0.04
         
        }

        this.wire = Constraint.create(options);
         World.add(world,this.wire);
        }
        
         this.pointA = this.wire.bodyA.position;
         this.pointB  =this.wire.bodyB.position;

        
       strokeweight(4);
       line (pointA.x,pointA.y,pointB.x,pointB.y);
       

    
}    
 









}
  
