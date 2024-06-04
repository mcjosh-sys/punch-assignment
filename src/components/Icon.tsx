
type Props = {
    icon?: string
}

const Icon = ({icon}: Props) => {
  return (
    <div className="flex items-center justify-center bg-[#f6f6f6] rounded-full w-fit p-6">
        <img src={icon} 
        alt="icon" 
        className="size-8"
        />
    </div>
  )
}

export default Icon