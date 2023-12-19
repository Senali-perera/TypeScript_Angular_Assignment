import {DialogService} from "./dialog-service.service";
import {TestBed} from "@angular/core/testing";

describe("Dialog Service", () => {
  let dialogService: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogService]
    }).compileComponents();

    dialogService = TestBed.inject(DialogService);
  });

  it('Dialog Service created', () => {
    expect(dialogService).toBeTruthy();
  });
})
