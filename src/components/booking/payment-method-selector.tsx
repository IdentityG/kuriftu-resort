'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const paymentMethods = [
  {
    id: 'chapa',
    name: 'Chapa',
    description: 'Pay with Ethiopian banks & mobile money',
    logo: '/images/chapa-logo.png',
    supported: ['CBE', 'Telebirr', 'CBE Birr', 'Amole', 'HelloCash'],
    recommended: true,
  },
  {
    id: 'telebirr',
    name: 'Telebirr',
    description: 'Pay directly with Telebirr',
    logo: '/images/telebirr-logo.png',
    supported: [],
  },
  {
    id: 'cbe_birr',
    name: 'CBE Birr',
    description: 'Commercial Bank of Ethiopia mobile banking',
    logo: '/images/cbe-logo.png',
    supported: [],
  },
  {
    id: 'stripe',
    name: 'International Cards',
    description: 'Visa, Mastercard, American Express',
    logo: '/images/cards-logo.png',
    supported: ['Visa', 'Mastercard', 'Amex'],
  },
  {
    id: 'bank_transfer',
    name: 'Bank Transfer',
    description: 'Direct bank transfer',
    logo: '/images/bank-logo.png',
    supported: [],
  },
];

interface PaymentMethodSelectorProps {
  onSelect: (method: string) => void;
  selectedMethod: string;
}

export default function PaymentMethodSelector({ 
  onSelect, 
  selectedMethod 
}: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-neutral-900">
        Select Payment Method
      </h3>
      
      <div className="grid gap-4">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => onSelect(method.id)}
            className={`
              relative p-4 rounded-xl border-2 transition-all text-left
              ${selectedMethod === method.id 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-neutral-200 hover:border-primary-200'
              }
            `}
          >
            {method.recommended && (
              <span className="absolute -top-2 right-4 px-2 py-1 bg-accent-500 text-white text-xs rounded-full">
                Recommended
              </span>
            )}
            
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 relative bg-white rounded-lg p-2 border border-neutral-100">
                {/* You'll need to add actual logos */}
                <div className="w-full h-full bg-neutral-200 rounded" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-neutral-900">
                    {method.name}
                  </h4>
                  {selectedMethod === method.id && (
                    <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  )}
                </div>
                
                <p className="text-sm text-neutral-600 mt-1">
                  {method.description}
                </p>
                
                {method.supported.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {method.supported.map((support) => (
                      <span 
                        key={support}
                        className="text-xs px-2 py-1 bg-neutral-100 rounded-full text-neutral-600"
                      >
                        {support}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}