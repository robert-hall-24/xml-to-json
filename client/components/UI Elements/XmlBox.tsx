import React from 'react'

interface TextAreaInputProps {
  text: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function XmlBox({ text, onChange }: TextAreaInputProps) {
  return (
    <div className="flex flex-col items-center">
      <textarea
        id="XmlBox"
        value={text}
        onChange={onChange}
        className="w-full p-4 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-700"
        rows={5}
        placeholder="Type something here..."
      />
    </div>
  )
}

export default XmlBox
