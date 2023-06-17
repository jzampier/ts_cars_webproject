'use client';

import Image from 'next/image';
import CustomButton from './CustomButton';
const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Encontre e alugue um carro -- rápido e fácil
        </h1>

        <p className="hero__subtitle">
          Agilize a sua experiência de alugar um carro com o nosso processo de
          agendamento sem esforço.
        </p>

        <CustomButton
          title="Ver Carros"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={() => {
            handleScroll;
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
