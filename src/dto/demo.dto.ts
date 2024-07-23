import { OptionalDto } from '@mwcp/share';

export class CreateItemDTO {
  form_id: string;

  uid: string;

  name: string;

  description: string;
}

// 当我传 [] 时，CreateDTO 的参数并没有追加到 UpdateDTO 中（并可选），
// 只有我写了一个排除的属性，才会把剩余的追加到 UpdateDTO 并且可选
export class UpdateItemDTO extends OptionalDto(CreateItemDTO, []) {
  id: number;
}
