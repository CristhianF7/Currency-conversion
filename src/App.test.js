import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ConvertorService from './services/convertorService';

test('Convertor service ok', () => {
  return ConvertorService.getFormats().then(response => {
    expect(response.data.rates).toBeDefined();
  });
});
