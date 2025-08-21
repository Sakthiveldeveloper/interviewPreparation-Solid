import React, { useState } from "react";

function ControlInput () {
    const [userName, setUserName] = useState('');
    const[userEmail, setUserEmail] = useState('');
    // const[submittedData, SetSubmittedData] = useState<{name: String, email: String}||null>
     const [submittedData, SetSubmittedData] = useState<{ userName: string; userEmail: string } | null>(null);

    const handleSubmit=(e: React.FormEvent)=>{        
        e.preventDefault();
        SetSubmittedData({userName, userEmail});
        setUserEmail("");
        setUserName("");
    }
    return(
        <div>
            <h2>User Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                    type="text"
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                    type="text"
                    value={userEmail}
                    onChange={(e)=>setUserEmail(e.target.value)}
                    required
                    />
                </div>
                <button
                type="submit"
                >
                    Submit
                </button>
            </form>
            {submittedData && (
        <div className="mt-6 p-4 bg-white border rounded shadow">
          <h2 className="text-lg font-semibold">Submitted Data:</h2>
          <p>
            <strong>Name:</strong> {submittedData.userName}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.userEmail}
          </p>
        </div>
      )}
        </div>
    )
}
export default ControlInput