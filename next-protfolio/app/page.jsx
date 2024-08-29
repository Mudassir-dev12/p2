"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Cyl from "./cyl";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const page = () => {
  return (
    <Canvas camera={{pov : 10}}>
      <ambientLight />
      <Cyl />
      <EffectComposer>
        <OrbitControls />
        <Bloom
          mipmapBlur
          intensity={4} // The bloom intensity.
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.34} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ToneMapping adaptive />
      </EffectComposer>
    </Canvas>
  );
};

export default page;
