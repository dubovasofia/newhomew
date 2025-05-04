import { ThemeProvider } from '@/contexts/ThemeContext'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { CounterApp } from '@/components/CounterApp'
import { NumberList } from '@/components/NumberList'
import { InputFocus } from '@/components/InputFocus'
import { TodoList } from '@/components/TodoList'
import { MemoExample } from '@/components/MemoExample'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ThemeSwitcher />
        
        <section>
          <h2>useCallback Example</h2>
          <CounterApp />
        </section>
        
        <section>
          <h2>useMemo Example</h2>
          <NumberList />
        </section>
        
        <section>
          <h2>useRef Example</h2>
          <InputFocus />
        </section>
        
        <section>
          <h2>useReducer Example (Todo List)</h2>
          <TodoList />
        </section>
        
        <section>
          <h2>React.memo Example</h2>
          <MemoExample />
        </section>
      </div>
    </ThemeProvider>
  )
}

export default App