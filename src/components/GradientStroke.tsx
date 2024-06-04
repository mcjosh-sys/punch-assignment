
type Props = {
    height: number;
    mb?: number;
}

const GradientStroke = ({height, mb}: Props) => {
  return (
    <div
    style={{
        height: `${height}px`,
        marginBottom: `${mb}px`
    }} 
    className="bg-gradient-to-r from-background via-primary to-background w-full"
    />
  )
}

export default GradientStroke