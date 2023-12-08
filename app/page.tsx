"use client"

import { useState } from "react"

type RandomNumber = {
  min: number;
  max: number;
  is: "n1" | "n2"
}

export default function Home() {
  const [number1, setNumber1] = useState<number>(0)
  const [number2, setNumber2] = useState<number>(0)
  const [isLoading1, setIsLoading1] = useState(false)
  const [isLoading2, setIsLoading2] = useState(false)

  const getRandomNumber = (min:number, max:number, is:"n1"|"n2") => {
    let random = Math.floor((Math.random() * (max - min + 1)) + min);
    if (is === "n1") {
      setNumber1(random)
    } else {
      setNumber2(random)
    }
  }

  const randomNumber1 = () => {
    setIsLoading1(true)
    getRandomNumber(1, 60, "n1")
    setTimeout(() => {
      setIsLoading1(false)
    }, 2000);
  }

  const randomNumber2 = () => {
    setIsLoading2(true)
    getRandomNumber(1, 10, "n2")
    setTimeout(() => {
      setIsLoading2(false)
    }, 2000);
  }

  const reset = () => {
    setNumber1(0)
    setNumber2(0)
  }

  return (
    <main className="flex flex-col justify-between h-screen py-20 px-96">
      <section className="flex justify-center">
        <h1 className="font-bold text-3xl">IUMP Talca - Rifa</h1>
      </section>
      <section className="flex justify-between space-x-10">
        <div className="border-2 border-black h-96 w-1/2 space-y-5 flex flex-col items-center justify-between p-10 rounded-lg">
          <h2 className="font-semibold text-2xl">Numero 1</h2>
          <h2 className="font-semibold text-6xl">
            {
              isLoading1 ?
                (
                  <div role="status" className="w-full flex justify-center">
                    <svg aria-hidden="true" className="w-12 h-12 text-black animate-spin dark:text-black fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                  </div>
                ) :
                (
                  number1
                )
            }
          </h2>
          <button onClick={randomNumber1} className="bg-black text-white hover:bg-black/75 transition-all w-full h-12 rounded-lg">
            {
              isLoading1 ?
                (
                  <div role="status" className="w-full flex justify-center items-center space-x-5">
                    <p>Buscando</p>
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                  </div>
                ) :
                (
                  "Buscar"
                )
            }
          </button>
        </div>
        <div className="border-2 border-black w-1/2 h-96 space-y-5 flex flex-col items-center justify-between p-10 rounded-lg">
          <h2 className="font-semibold text-2xl">Numero 2</h2>
          <h2 className="font-semibold text-6xl">
            {
              isLoading2 ?
                (
                  <div role="status" className="w-full flex justify-center">
                    <svg aria-hidden="true" className="w-12 h-12 text-black animate-spin dark:text-black fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                  </div>
                ) :
                (
                  number2
                )
            }
          </h2>
          <button onClick={randomNumber2} className="bg-black text-white hover:bg-black/75 transition-all w-full h-12 rounded-lg">
            {
              isLoading2 ?
                (
                  <div role="status" className="w-full flex justify-center items-center space-x-5">
                    <p>Buscando</p>
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                  </div>
                ) :
                (
                  "Buscar"
                )
            }
          </button>
        </div>
      </section>
      <section className="flex justify-center">
        <button onClick={reset} className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all w-full h-12 rounded-lg">
          Reiniciar
        </button>
      </section>
    </main>
  )
}