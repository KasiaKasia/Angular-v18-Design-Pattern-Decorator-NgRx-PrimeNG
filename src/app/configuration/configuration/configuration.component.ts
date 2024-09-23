import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Brand, DeliveryType, EngineType, EngineTypeRecords, Model, OrderDetails, Payment, Payments, brands, deliveryType, models } from './models/configuration';
import { ImportsModule } from './import-modules/imports';
import { BatteryOperatedDecoratorService, CombustionEngineDecoratorService, ElectricDecoratorService, Engine, EngineTypeName } from './decorator/mower-configuration.decorator';
import { LogoAngularComponent } from "../components/logo-angular/logo-angular.component";
import { DatePipe, JsonPipe } from '@angular/common';
import { DropdownDefaultsSettingsDirective } from '../directives/dropdown-defaults-settings.directive';
import { OrdersStore } from '../signal-store/orders.store';


@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [ImportsModule, LogoAngularComponent, DatePipe, DropdownDefaultsSettingsDirective, JsonPipe],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss'
})
export class ConfigurationComponent {
  private formBuilder = inject(FormBuilder)
  EngineTypeRecords = EngineTypeRecords
  brands: Brand[] = brands
  models: Model[] = models
  active: number = 0;
  protected notificationContent: any
  protected notifier: Engine = new EngineTypeName()
  readonly storeOrder = inject(OrdersStore);
  protected levelOne = true
  protected levelTwo = true
  protected formBuilderGroup: FormGroup = this.formBuilder.group({
    engineType: new FormControl(<EngineType | null>(null),),
    brand: new FormControl<Brand | null>(null),
    model: new FormControl<Model | null>(null),
  })
  protected formBuilderGroupOrder: FormGroup = this.formBuilder.group({
    paymentType: new FormControl(<Payment | string>('')),
    deliveryType: new FormControl(<DeliveryType | string>('')),
    dateAndTime: new FormControl(<Date[] | null>(null)),
    lastName: [''],
    firstName: [''],
    city: [''],
    zipCode: [''],
    street: [''],
    houseNumber: [''],
    apartmentNumber: [''],
    listAddressesAuthorizedPersons: this.formBuilder.array([this.createaddressAuthorizedPerson()]),
  })
  randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  rowValueOrder: any;
  rowValueConfigurationMower: any;

  get listAddressesAuthorizedPersons() {
    return this.formBuilderGroupOrder.get('listAddressesAuthorizedPersons') as FormArray;
  }


  createaddressAuthorizedPerson(): FormGroup {
    const listAddressesAuthorizedPersons = this.formBuilder.group({
      lastName: [''],
      firstName: [''],
      city: [''],
      zipCode: [''],
      street: [''],
      houseNumber: [''],
      apartmentNumber: ['']
    })
    return listAddressesAuthorizedPersons
  }

  addddressAuthorizedPerson() {
    this.listAddressesAuthorizedPersons.push(this.createaddressAuthorizedPerson())
  }

  removeddressAuthorizedPerson(index: number) {
    this.listAddressesAuthorizedPersons.removeAt(index);
  }
  hasNonEmptyEntries(): boolean {
    return this.listAddressesAuthorizedPersons.value.some((person: any) => 
      person.firstName || person.lastName || person.city || person.zipCode || person.street || person.houseNumber || person.apartmentNumber
    );
  } 
  deliveryType: DeliveryType[] = deliveryType;

  engineTypes: { id: EngineType, name: string }[] = Object.keys(EngineTypeRecords).map(key => ({
    id: Number(key) as EngineType,
    name: EngineTypeRecords[Number(key) as EngineType]
  }));

  PaymentTypeOptions = Object.entries(Payments).map(([key, value]) => ({
    label: value,
    value: key
  }));

  constructor() {
    this.formBuilderGroup.get('engineType')?.valueChanges.subscribe(value => {
      this.updateFormForEngineType(value);
    });
  }

  updateFormForEngineType(engineType: any) {
    if (engineType.name === EngineTypeRecords[1]) {
      this.formBuilderGroup.addControl('engineDisplacement', new FormControl(''));
      this.formBuilderGroup.addControl('tankCapacity', new FormControl(''));
      this.formBuilderGroup.addControl('cuttingLevels', new FormControl('', Validators.required));

      this.removeControls(['cableLength', 'numberOfBlades', 'color1', 'numberOfBatteries', 'capacityOfOneBattery', 'color2']);

    } else if (engineType.name === EngineTypeRecords[2]) {
      this.formBuilderGroup.addControl('cableLength', new FormControl(''));
      this.formBuilderGroup.addControl('numberOfBlades', new FormControl(''));
      this.formBuilderGroup.addControl('color1', new FormControl(''));

      this.removeControls(['engineDisplacement', 'tankCapacity', 'cuttingLevels', 'numberOfBatteries', 'capacityOfOneBattery', 'color2']);
    } else if (engineType.name === EngineTypeRecords[3]) {
      this.formBuilderGroup.addControl('numberOfBatteries', new FormControl(''));
      this.formBuilderGroup.addControl('capacityOfOneBattery', new FormControl(''));
      this.formBuilderGroup.addControl('color2', new FormControl('', Validators.required));

      this.removeControls(['engineDisplacement', 'tankCapacity', 'cuttingLevels', 'cableLength', 'bladeCount', 'color1']);
    }
  }


  removeControls(controls: string[]) {
    controls.forEach(control => {
      if (this.formBuilderGroup.contains(control)) {
        this.formBuilderGroup.removeControl(control);
      }
    });
  }

  selectedEngineType(EngineType: any) {

    this.notifier = new EngineTypeName()
    let decoratedNotifier = this.notifier;

    if (EngineType.value.name === EngineTypeRecords[1]) {
      decoratedNotifier = new CombustionEngineDecoratorService(decoratedNotifier);
      if (decoratedNotifier instanceof CombustionEngineDecoratorService) {
        this.notifier = decoratedNotifier
      }
    }

    if (EngineType.value.name === EngineTypeRecords[2]) {
      decoratedNotifier = new ElectricDecoratorService(decoratedNotifier);
      if (decoratedNotifier instanceof ElectricDecoratorService) {
        this.notifier = decoratedNotifier
      }
    }

    if (EngineType.value.name === EngineTypeRecords[3]) {
      decoratedNotifier = new BatteryOperatedDecoratorService(decoratedNotifier);
      if (decoratedNotifier instanceof BatteryOperatedDecoratorService) {
        this.notifier = decoratedNotifier
      }
    }

    decoratedNotifier.getEngineTypeName?.(EngineType.value.name)
    this.notifier = decoratedNotifier
    return this.notifier
  }
  saveMowerConfiguration() {
    if (this.formBuilderGroup.invalid) { return };
    this.rowValueConfigurationMower = this.formBuilderGroup.getRawValue()

    if (this.formBuilderGroup.dirty && this.formBuilderGroup.valid) {
      this.levelOne = false
    }
  }

  findMaxIdInTasks(): number {
    let maxId = 0
    this.storeOrder.orders().map((object: OrderDetails) => maxId = Math.max(object.id));
    return maxId
  }
  saveOrder() {
    if (this.formBuilderGroupOrder.invalid) { return };
    this.rowValueOrder = this.formBuilderGroupOrder.getRawValue()
    if (this.formBuilderGroupOrder.dirty && this.formBuilderGroupOrder.valid) {
      this.levelTwo = false
      const newOrders: OrderDetails = {
        id: this.findMaxIdInTasks() + 1,
        engineType: this.formBuilderGroup.getRawValue().engineType.name,
        brand: this.formBuilderGroup.getRawValue().brand.name,
        model: this.formBuilderGroup.getRawValue().model.name,
        paymentType: this.formBuilderGroupOrder.getRawValue().paymentType.label,
        deliveryType: this.formBuilderGroupOrder.getRawValue().deliveryType.name,
        dateAndTime: this.formBuilderGroupOrder.getRawValue().dateAndTime,
        lastName: this.formBuilderGroupOrder.getRawValue().lastName,
        firstName: this.formBuilderGroupOrder.getRawValue().firstName
      }

      this.storeOrder.addOrder(newOrders)
    }

  }
}
