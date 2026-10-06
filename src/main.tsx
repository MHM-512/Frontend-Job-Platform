
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { AuthProvider } from './app/providers/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <App />
    </AuthProvider>

)
