import { OptionalDto } from '@mwcp/share';

export class CreateItemDTO {
  form_id: string;

  uid: string;

  name: string;

  description: string;
}

export class UpdateItemDTO extends OptionalDto(CreateItemDTO, []) {
  id: number;
}
