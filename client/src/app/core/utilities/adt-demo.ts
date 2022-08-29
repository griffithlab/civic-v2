import { EvidenceDirection, EvidenceType } from "@app/generated/civic.apollo"

type instructionFunction = (x: number) => string

type UserDefinedNullable<T> = 
  { t: 'Unfilled', getInstruction: instructionFunction } |
  { t: 'ExplicitEmpty', message: 'This has been looked at but is null'} |
  { t: 'WithValue', value: T } 

  type EvidenceDirectionInput = UserDefinedNullable<EvidenceDirection>


  const someTextForAnEnum = (e: EvidenceDirection): string  => {
    return e;
  }

  const value = (input: EvidenceDirectionInput): string => {
    switch(input.t) {
      case 'Unfilled':
        return input.getInstruction(5)
      case 'ExplicitEmpty':
        return input.message
      case 'WithValue':
        return someTextForAnEnum(input.value)
    }
  }


  value({t: 'Unfilled', getInstruction: (x)=> 'hi'})