import React from 'react';
import { LinkForm } from './components/LinkForm';
import { Link } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-blue-500 p-3 rounded-full">
            <Link className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold ml-3 text-gray-800">Link Submitter</h1>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 text-center">
            Drop your link below and we'll process it right away.
          </p>
          <LinkForm />
        </div>
      </div>
    </div>
  );
}

export default App;