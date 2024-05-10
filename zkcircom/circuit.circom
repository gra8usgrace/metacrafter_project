pragma circom 2.0.0;


template And(){
   //Declaration of signals
   signal input a;
   signal input b;
   signal output out;

   //Statements.
   out <== a * b;
}

template NotGate1() {
    signal input b;
    signal output out;

    // Constraint for NOT gate
    out <== 1 - b;
}

template OrGate2() {
    signal input x;
    signal input y;
    signal output out;

    // Constraints for OR gate
    signal sym1 <== x + y;
    signal sym2 <== x * y;
    out <== sym1 - sym2;
}

template CombinedCircuit() {
    signal input a;
    signal input b;
    signal output out;
    component AndGate2 =  And();
    component NotGate =  NotGate1();
    component OrGate =  OrGate2();

    // connector 

    AndGate2.a <== a;
    AndGate2.b <== b;
    NotGate.b <== b;
    OrGate.x <== AndGate2.out;
    OrGate.y <== NotGate.out;
    out <== OrGate.out;
    
}

component main = CombinedCircuit();
