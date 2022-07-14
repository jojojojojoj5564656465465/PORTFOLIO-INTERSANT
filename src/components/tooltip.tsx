import CircleInfoIcon from './icons/circle-info'

interface IProps {
  text: string
}

const ToolTip = ({ text }: IProps) => (
  <div className="ml-2 tooltip cursor-pointer">
    <CircleInfoIcon className="w-4" />
    <div className="tooltiptext">{text}</div>
  </div>
)

export default ToolTip
