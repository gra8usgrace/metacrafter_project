
# Circuit Documentation

## Overview
This circuit demonstrates a simple logic gate combination using Circom. It includes an AND gate (`And`), a NOT gate (`NotGate1`), and an OR gate (`OrGate2`), combined in the `CombinedCircuit` template.

## Templates
1. **AndGate (`And`):**
   - **Inputs:** `a`, `b`
   - **Output:** `out`
   - **Description:** Computes the logical AND of inputs `a` and `b`.

2. **NotGate (`NotGate1`):**
   - **Input:** `b`
   - **Output:** `out`
   - **Description:** Computes the logical NOT of input `b`.

3. **OrGate (`OrGate2`):**
   - **Inputs:** `x`, `y`
   - **Output:** `out`
   - **Description:** Computes the logical OR of inputs `x` and `y`.

4. **CombinedCircuit:**
   - **Inputs:** `a`, `b`
   - **Output:** `out`
   - **Components:** `AndGate2` (AndGate), `NotGate` (NotGate1), `OrGate` (OrGate2)
   - **Description:** Connects an AND gate, a NOT gate, and an OR gate in sequence to produce the final output `out`.

## Usage
To use this circuit, instantiate the `CombinedCircuit` template and provide inputs `a` and `b`. The output `out` will reflect the logical operation performed by the circuit.

Example:
```circom
template Main() {
    signal input a;
    signal input b;
    signal output out;

    component Circuit = CombinedCircuit();

    Circuit.a <== a;
    Circuit.b <== b;
    out <== Circuit.out;
}

component main = Main();
```

## Notes
- This circuit assumes binary inputs (`a`, `b`) and outputs (`out`), where `1` represents true and `0` represents false.
- The logical operations are implemented using arithmetic operations (`*` for AND, `1 - b` for NOT, `x + y - x * y` for OR) due to Circom's limited functionality for logical operations.


The circom Documentation was consulted for the implementation of this circuit. https://docs.circom.io/getting-started/writing-circuits/ 


CONTRACT ADDRESS: 
```sh 
 0x3a42E0503e11e43aE9f49Dcc4d6E19450ae9F40a 
 ```