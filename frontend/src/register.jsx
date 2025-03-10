import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
   const[name,setName]=useState('');
   const[email,setEmail]=useState('');
   const[password,setPassword]=useState('');
  
  const [submitted, setSubmitted] = useState(false);
  
  
  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/register", { name,email,password }, { withCredentials: true });
     
    } catch (error) {
      console.log("Signup failed");
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-black p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full opacity-10 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-300 rounded-full opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-400 rounded-full opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Glassmorphic card */}
      <div className="relative w-full max-w-md p-8 backdrop-blur-lg bg-black/20 rounded-2xl shadow-xl border border-blue-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:translate-y-1">
        {/* Form header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-blue-200/80">Sign up to get started</p>
        </div>
        
        {/* Form content */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input fields with transitions */}
          <div className="group">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg outline-none text-white placeholder-blue-100/50 transition-all duration-300 focus:bg-black/40 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20"
              placeholder="Full Name"
            />
          </div>
          
          <div className="group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg outline-none text-white placeholder-blue-100/50 transition-all duration-300 focus:bg-black/40 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20"
              placeholder="Email Address"
            />
          </div>
          
          <div className="group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg outline-none text-white placeholder-blue-100/50 transition-all duration-300 focus:bg-black/40 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20"
              placeholder="Password"
            />
          </div>
          
          {/* Submit button with transition */}
          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-500 ${
              submitted 
                ? 'bg-blue-500 text-white' 
                : 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20'
            }`}
          >
            {submitted ? 'Success!' : 'Sign Up'}
          </button>
        </form>
        
        {/* Login link */}
        <div className="mt-6 text-center text-blue-100/60">
          <p>Already have an account? <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;