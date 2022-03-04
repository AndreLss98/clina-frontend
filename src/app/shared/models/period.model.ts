const DAY_TIME = 24;
export class Period {
  public name: string = '';
  public value: string = '';
  public init: number;

  public availableSchedules: any[] = [];

  constructor(
    name: string,
    value: string,
    init: number
  ) {
    this.name = name;
    this.value = value;
    this.init = init;
    this.availableSchedules = this._splitPeriods();
  }
  private _splitPeriods(): {range: string, isSelected: boolean}[] {
    const splittedPeriods: {range: string, isSelected: boolean}[] = [];
    
    for (let round = 0; round < 8; ++round) {
      const normalizedInit = (this.init + round) >= DAY_TIME? (this.init + round) - DAY_TIME : this.init + round;
      const normalizedEnd = (this.init + round + 1) >= DAY_TIME? (this.init + round + 1) - DAY_TIME : this.init + round + 1;

      splittedPeriods.push({
        range: `${String(normalizedInit).padStart(2, '0')}:00 as ${String(normalizedEnd).padStart(2, '0')}:00`,
        isSelected: false
      });
    }

    return splittedPeriods;
  }
}