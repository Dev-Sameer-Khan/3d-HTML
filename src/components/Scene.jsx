import { Html, Text, useCursor } from "@react-three/drei";
import { Chicken } from "./Chicken";
import { Fridge } from "./Fridge";
import { Kitchen } from "./Kitchen";
import { Table } from "./Table";
import { Room } from "./Room";
import { useState } from "react";

const Scene = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useCursor(hovered, "grab", "auto");
  useCursor(clicked, "grabbing", "grab");

  return (
    <mesh
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerDown={()=> setClicked(true)}
      onPointerUp={()=> setClicked(false)}
    >
      <group
        position-y={-1.5}
        position-x={-0.5}
        position-z={3.5}
        scale={1.5}
        rotation-y={-Math.PI / 2}
      >
        <Room />
        <Text fontSize={0.4} fontWeight={900} position-y={1.5} position-z={-4.1}>
          Made by Lazy Codwr
        </Text>
      </group>

      <group position-y={1}>
        <group position-x={1} position-y={-1.5} position-z={-1.5}>
          <Fridge
            position-x={2.1}
            position-y={-0.75}
            position-z={-0.6}
            scale={1.5}
            rotation-y={-Math.PI / 2}
          />
          <Html position-x={2} position-y={2.5}>
            <div style={{position:"relative"}}>
              <div className="details details">
                <h1 className="d-text">Fridge</h1>
                <p className="d-para">1299$</p>
              </div>
              <div className="details details-hidden">
                <p>
                  <strong>Type:</strong> Double-door fridge with freezer<br />
                  <strong>Feature:</strong> Built-in ice/water dispenser<br />
                  <strong>Capacity:</strong> 22 cu.ft.<br />
                  <strong>Energy Rating:</strong> A+++<br />
                  <strong>Smart Features:</strong> Touchscreen panel, Wi-Fi enabled, Interior LED lighting
                </p>
              </div>
            </div>
          </Html>
          <Kitchen scale={0.02} position-x={-5.8} position-y={-0.8} />
          <Html position-x={-5.5} position-y={3.2}>
            <div className="details">
              <h1 className="d-text">Kitchen</h1>
              <p className="d-para">5299$</p>
            </div>
            <div className="details details-hidden">
                <p>
                  <strong>Type:</strong> Modern modular kitchen set<br />
                  <strong>Features:</strong> Soft-close cabinets, pull-out pantry shelves, LED under-cabinet lighting, granite countertops<br />
                  <strong>Appliances Included:</strong> Induction cooktop, convection oven, dishwasher, built-in microwave<br />
                  <strong>Material:</strong> High-quality water-resistant MDF<br />
                  <strong>Warranty:</strong> 10 years on cabinetry and hardware
                </p>
              </div>
          </Html>
        </group>
        <group position-y={-3} position-x={-0.5} position-z={2}>
          <Html position-x={-2} position-y={2.5}>
            <div className="details">
              <h1 className="d-text">Table</h1>
              <p className="d-para">299$</p>
            </div>
            <div className="details details-hidden">
                <p>
                  <strong>Type:</strong> Modern dining table<br />
                  <strong>Seating:</strong> Comfortably seats 4-6 people<br />
                  <strong>Material:</strong> Solid oak wood with matte finish<br />
                  <strong>Dimensions:</strong> 180cm x 85cm x 76cm<br />
                  <strong>Features:</strong> Scratch-resistant surface, rounded corners for safety<br />
                  <strong>Warranty:</strong> 3 years structural warranty
                </p>
              </div>
          </Html>
          <Table scale={0.15} />
          <Chicken scale={0.002} position-y={1.82} />
          <Html position-x={0.5} position-y={2.5}>
            <div className="details">
              <h1 className="d-text">Chicken</h1>
              <p className="d-para">29$</p>
            </div>
            <div className="details details-hidden">
                <p>
                  <strong>Type:</strong> Free-range roasted chicken<br />
                  <strong>Weight:</strong> Approx. 1.8kg<br />
                  <strong>Preparation:</strong> Marinated with herbs and spices, oven-roasted for crisp skin<br />
                  <strong>Serving Suggestion:</strong> Best enjoyed hot with seasonal vegetables<br />
                  <strong>Source:</strong> Locally sourced farm<br />
                  <strong>Freshness Guarantee:</strong> Delivered chilled, never frozen
                </p>
              </div>
          </Html>
        </group>
      </group>
    </mesh>
  );
};

export default Scene;
