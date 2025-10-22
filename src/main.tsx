import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Toaster } from 'sonner';

// import { HooksApp } from './hooksApp';
// import { TrafficLight } from './01-useState/TrafficLight';
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook';
// import { PokemonPage } from './03-examples/PokemonPage';
// import { FocusScreen } from './hooks/04-useRef/FocusScreen';
// import { TasksApp } from './05-useReducer/TaskApp';
// import { ScrambleWords } from './05-useReducer/ScrambleWords';
// import { MemoHook } from './06-memos/MemoHook';
// import { MemoCounter } from './06-memos/MemoCounter';
// import { InstagromApp } from './07-useOptimistic/InstagromApp';
// import { ClientInformation, getUserAction } from './08-use-suspense';
import { ProfessionalApp } from './09-useContext/ProfessionalApp';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <Suspense
      fallback={
        <div className='bg-gradient flex flex-col'>
          <h1 className='text-2xl'>Loading...</h1>
        </div>
      }>
      <ClientInformation getUser={getUserAction(3)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>,
);

