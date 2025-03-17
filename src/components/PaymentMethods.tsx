import React, { useState } from 'react';
import { FaCcPaypal, FaStripeS, FaCreditCard } from 'react-icons/fa'; // usamos iconos?

const PaymentMethods: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>(''); // Para controlar el método de pago seleccionado

  const handlePaymentChange = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod); // Cambiar el método de pago seleccionado
  };

  return (
    <div className="payment-methods w-full">
      <h3 className="text-xl font-semibold mb-4 text-center sm:text-left">Elige tu método de pago</h3>
      
      {/* Contenedor flexible para los botones de pago */}
      <ul className="flex flex-wrap justify-center sm:justify-start gap-4 max-h-64 overflow-y-auto">
        <li className="w-1/2 md:w-1/3 lg:w-1/4 flex">
          <button
            onClick={() => handlePaymentChange('MercadoPago')}
            className={`payment-option w-full px-6 py-3 rounded-lg shadow-md text-white ${selectedPayment === 'MercadoPago' ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <FaCcPaypal className="inline-block mr-2" />
            Mercado Pago
          </button>
        </li>
        <li className="w-1/2 md:w-1/3 lg:w-1/4 flex">
          <button
            onClick={() => handlePaymentChange('NaranjaX')}
            className={`payment-option w-full px-6 py-3 rounded-lg shadow-md text-white ${selectedPayment === 'NaranjaX' ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <FaCreditCard className="inline-block mr-2" />
            Naranja X
          </button>
        </li>
        <li className="w-1/2 md:w-1/3 lg:w-1/4 flex">
          <button
            onClick={() => handlePaymentChange('Uala')}
            className={`payment-option w-full px-6 py-3 rounded-lg shadow-md text-white ${selectedPayment === 'Uala' ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <FaCreditCard className="inline-block mr-2" />
            Ualá
          </button>
        </li>
        <li className="w-1/2 md:w-1/3 lg:w-1/4 flex">
          <button
            onClick={() => handlePaymentChange('PersonalPay')}
            className={`payment-option w-full px-6 py-3 rounded-lg shadow-md text-white ${selectedPayment === 'PersonalPay' ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <FaCreditCard className="inline-block mr-2" />
            Personal Pay
          </button>
        </li>
        <li className="w-1/2 md:w-1/3 lg:w-1/4 flex">
          <button
            onClick={() => handlePaymentChange('CuentaDNI')}
            className={`payment-option w-full px-6 py-3 rounded-lg shadow-md text-white ${selectedPayment === 'CuentaDNI' ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <FaCreditCard className="inline-block mr-2" />
            Cuenta DNI
          </button>
        </li>
        <li className="w-1/2 md:w-1/3 lg:w-1/4 flex">
          <button
            onClick={() => handlePaymentChange('BNAPlus')}
            className={`payment-option w-full px-6 py-3 rounded-lg shadow-md text-white ${selectedPayment === 'BNAPlus' ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <FaCreditCard className="inline-block mr-2" />
            BNA+
          </button>
        </li>
        <li className="w-1/2 md:w-1/3 lg:w-1/4 flex">
          <button
            onClick={() => handlePaymentChange('Brubank')}
            className={`payment-option w-full px-6 py-3 rounded-lg shadow-md text-white ${selectedPayment === 'Brubank' ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <FaCreditCard className="inline-block mr-2" />
            Brubank
          </button>
        </li>
        <li className="w-1/2 md:w-1/3 lg:w-1/4 flex">
          <button
            onClick={() => handlePaymentChange('BBVA')}
            className={`payment-option w-full px-6 py-3 rounded-lg shadow-md text-white ${selectedPayment === 'BBVA' ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <FaCreditCard className="inline-block mr-2" />
            BBVA
          </button>
        </li>
        <li className="w-1/2 md:w-1/3 lg:w-1/4 flex">
          <button
            onClick={() => handlePaymentChange('ClaroPay')}
            className={`payment-option w-full px-6 py-3 rounded-lg shadow-md text-white ${selectedPayment === 'ClaroPay' ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <FaCreditCard className="inline-block mr-2" />
            Claro Pay
          </button>
        </li>
        <li className="w-1/2 md:w-1/3 lg:w-1/4 flex">
          <button
            onClick={() => handlePaymentChange('Prex')}
            className={`payment-option w-full px-6 py-3 rounded-lg shadow-md text-white ${selectedPayment === 'Prex' ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <FaCreditCard className="inline-block mr-2" />
            Prex
          </button>
        </li>
        <li className="w-1/2 md:w-1/3 lg:w-1/4 flex">
          <button
            onClick={() => handlePaymentChange('Astropay')}
            className={`payment-option w-full px-6 py-3 rounded-lg shadow-md text-white ${selectedPayment === 'Astropay' ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <FaCreditCard className="inline-block mr-2" />
            Astropay
          </button>
        </li>
        <li className="w-1/2 md:w-1/3 lg:w-1/4 flex">
          <button
            onClick={() => handlePaymentChange('LemonCash')}
            className={`payment-option w-full px-6 py-3 rounded-lg shadow-md text-white ${selectedPayment === 'LemonCash' ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <FaCreditCard className="inline-block mr-2" />
            Lemon Cash
          </button>
        </li>
        <li className="w-1/2 md:w-1/3 lg:w-1/4 flex">
          <button
            onClick={() => handlePaymentChange('Yoy')}
            className={`payment-option w-full px-6 py-3 rounded-lg shadow-md text-white ${selectedPayment === 'Yoy' ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <FaCreditCard className="inline-block mr-2" />
            Yoy
          </button>
        </li>
        {/* Para todas las billeteras el mismo proceso */}
      </ul>
      
      {/* acá se puede agregar más lógica si pinta mostrar un ícono o un detalle extra dependiendo del medio de pago */}
      {selectedPayment && (
        <p className="text-gray-700 text-center sm:text-left">Método de pago seleccionado: {selectedPayment}</p>
      )}

      {/* Botón de Confirmar Compra */}
      <button
        disabled={!selectedPayment} // Deshabilitar el botón si no se ha seleccionado un método
        className={`bg-green-600 text-white px-8 py-4 rounded-lg mt-6 hover:bg-green-700 transition w-full sm:w-auto ${!selectedPayment ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Confirmar compra
      </button>
    </div>
  );
};

export default PaymentMethods;
