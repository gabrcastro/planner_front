import { afterEach } from  'vitest' 
import { cleanup } from  '@testing-library/react' 

// executa uma limpeza após cada caso de teste (por exemplo, limpando jsdom) 
afterEach ( () => { 
  cleanup (); 
})