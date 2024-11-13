interface OutputDisplayProps {
  text: string
}

function JsonBox({ text }: OutputDisplayProps) {
  return (
    <div className="mt-4 w-full p-4 border rounded-md bg-gray-100 shadow-inner">
      <h2 className="text-md font-semibold mb-2 text-gray-800">Output:</h2>
      <p className="text-gray-600 whitespace-pre-wrap">
        {text || 'Your output will appear here...'}
      </p>
    </div>
  )
}

export default JsonBox
