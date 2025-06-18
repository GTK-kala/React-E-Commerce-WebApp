

const Title = (props) => {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <p className="text-gray-500">{props.Text[0]} <span className="font-medium text-gray-700">{props.Text[1]}</span></p>
      <p className="w-8 sm:h-[2px] bg-gray-700"></p>
    </div>
  )
}

export default Title