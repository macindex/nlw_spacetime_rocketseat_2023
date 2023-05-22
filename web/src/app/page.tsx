import { User, Heart } from 'lucide-react'

import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>
        {/* Sign in */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w[140px] text-sm leading-snug">
            <span className="underline">Create your account</span>
            <br /> and save your memories
          </p>
        </a>
        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW Spacetime" />
          <div className="max-w-[420px] space-y-4">
            <h1 className="text-5-xl font-bold leading-tight text-gray-50">
              Your time capsule
            </h1>
            <p className="text-lg leading-relaxed">
              Collect memorable moments from your journey and share (if you
              like) with the world!
            </p>
          </div>
          <a href="bg-green-500 inline-block rounded-full px-5 py-3 font-alt text-sm uppercase leading-none text-black">
            REGISTER MEMORY
          </a>
        </div>
        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Make with <Heart /> in NLW{' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-100"
            href="https://rocketseat.com.br"
          ></a>
          Rocketseat
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            You still not register anyone remember, start{''}{' '}
            <a href="" className="underline hover:text-gray-50">
              create now
            </a>{' '}
          </p>
        </div>
      </div>
    </main>
  )
}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>


        INICIO principal
        var opcao_selecionada: STRING
        var valor: INTEIRO
        var saldo: INTEIRO
        var encerrar_programa: BOO
       
        DEFINIR encerrar_programa -> falso
       
        ENQUANTO encerrar_programa IGUAL_A falso
         CHAMAR MOSTRAR_MENU -> opcao_selecionada
        SE opcao_selecionada IGUAL_A a 
         MOSTRAR "Seu saçdp é: ", saldo
        OU_SE opcao_selecionada IGUAL_A b 
         MOSTRAR "Digite o valor a depositar: "
         ESPERAR_DIGITACAO -> valor
         SOMAR valor, saldo -> saldo
         MOSTRAR "Deposito efetuado"
        OU_SE opcao_selecionada IGUAL_A c 
         MOSTRAR "Digite valor a retirar: "
         ESPERAR_DIGITACAO -> valor
         SE valor MARIOR_QUE saldo
          MOSTRAR "Saque não permitido, saldo insuficiente"
         SENAO 
          SUBTRAIR valor, saldo -> saldo
        FIM SE
        MOSTRAR "Saque efetuado"
        OU_SE opcao_selecionada -> encerrar_programa
         DEFINIR verdadeiro -> encerrar_programa
         SENAO
         MOSTRAR "Opcao invalida, tente novamente"
         FIM SE


        MOSTRAR "Saque efetuado"



