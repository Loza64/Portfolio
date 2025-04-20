import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalService } from './technical.service';

describe('TechnicalService', () => {
  let service: TechnicalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnicalService],
    }).compile();

    service = module.get<TechnicalService>(TechnicalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
