import { ReactNode } from 'react'
import CircleInfoIcon from '../icons/circle-info'
import VCenterRow from '../v-center-row'

interface IProps {
  children?: ReactNode
}

const BlueAlert = ({ children }: IProps) => (
  <VCenterRow className="text-center border border-blue-100 bg-blue-50 text-blue-500 fill-blue-500 p-6 rounded-md mt-8 mx-8">
    <CircleInfoIcon className="w-8" />
    <h3 className="ml-4">{children}</h3>
  </VCenterRow>
)

export default BlueAlert
