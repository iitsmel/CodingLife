import * as THREE from 'three'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import StarsBlue from './Stars_Blue'
import StarsBlueSmall from './Stars_Blue_Small'
import StarsRed from './Stars_Red'
import StarsRedCentred from './Stars_Red_Centred'
import StarsOrange from './Stars_Orange'
import StarsWhite from './Stars_White'
import StarsWhiteCentredUp from './Stars_White_Centred_Up'
import StarsWhiteCentredDown from './Stars_White_Centred_Down'
import StarsPurple from './Stars_Purple'
import StarsPink from './Stars_Pink'
import StarsLightBlue from './Stars_LightBlue'
import StarsYellow from './Stars_Yellow'
import './Stars_Shape'

export default function Cluster() {

  return (
      <Canvas
      camera={{ position: [0, 0, 3000], near: 0.1, far: 100000}}
      onCreated={({ gl, camera }) => {
        gl.setClearColor(new THREE.Color('#000000'))
      }}>

        
        <StarsBlue />
        <StarsBlueSmall />
        <StarsRed />
        <StarsRedCentred />
        <StarsOrange />
        <StarsWhite />
        <StarsWhiteCentredUp />
        <StarsWhiteCentredDown />
        <StarsPurple />
        <StarsPink />
        <StarsLightBlue />
        <StarsYellow />

      </Canvas>
  )
}