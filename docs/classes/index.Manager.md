# Class: Manager<Ctx, Renderer, FallbackRenderer\>

[index](../modules/index.md).Manager

Creates a new Listr2 task manager.

Useful for creating a single instace of Listr2 with pre-set settings.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Ctx` | [`ListrContext`](../types/index.ListrContext.md) |
| `Renderer` | extends [`ListrRendererValue`](../types/index.ListrRendererValue.md)``"default"`` |
| `FallbackRenderer` | extends [`ListrRendererValue`](../types/index.ListrRendererValue.md)``"verbose"`` |

## Constructors

### constructor

• **new Manager**<`Ctx`, `Renderer`, `FallbackRenderer`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Ctx` | `any` |
| `Renderer` | extends [`ListrRendererValue`](../types/index.ListrRendererValue.md)``"default"`` |
| `FallbackRenderer` | extends [`ListrRendererValue`](../types/index.ListrRendererValue.md)``"verbose"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListrBaseClassOptions`](../types/index.ListrBaseClassOptions.md)<`Ctx`, `Renderer`, `FallbackRenderer`\> |

#### Defined in

src/manager.ts:15

## Properties

### err

• **err**: [`ListrError`](index.ListrError.md)<`Record`<`PropertyKey`, `any`\>\>[] = `[]`

#### Defined in

src/manager.ts:12

___

### tasks

• `Private` **tasks**: [`ListrTask`](../interfaces/index.ListrTask.md)<`any`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\>[] = `[]`

#### Defined in

src/manager.ts:13

___

### options

• `Optional` **options**: [`ListrBaseClassOptions`](../types/index.ListrBaseClassOptions.md)<`Ctx`, `Renderer`, `FallbackRenderer`\>

## Accessors

### ctx

• `set` **ctx**(`ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `Ctx` |

#### Returns

`void`

#### Defined in

src/manager.ts:17

## Methods

### add

▸ **add**<`InjectCtx`\>(`tasks`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InjectCtx` | `Ctx` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks` | [`ListrTask`](../interfaces/index.ListrTask.md)<`InjectCtx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\>[] \| (`ctx?`: `InjectCtx`) => [`ListrTask`](../interfaces/index.ListrTask.md)<`InjectCtx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\>[] |
| `options?` | [`ListrSubClassOptions`](../types/index.ListrSubClassOptions.md)<`InjectCtx`, `Renderer`\> |

#### Returns

`void`

#### Defined in

src/manager.ts:21

___

### runAll

▸ **runAll**<`InjectCtx`\>(`options?`): `Promise`<`InjectCtx`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InjectCtx` | `Ctx` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListrBaseClassOptions`](../types/index.ListrBaseClassOptions.md)<`InjectCtx`, `Renderer`, `FallbackRenderer`\> |

#### Returns

`Promise`<`InjectCtx`\>

#### Defined in

src/manager.ts:30

___

### newListr

▸ **newListr**<`InjectCtx`, `InjectRenderer`, `InjectFallbackRenderer`\>(`tasks`, `options?`): [`Listr`](index.Listr.md)<`InjectCtx`, `InjectRenderer`, `InjectFallbackRenderer`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InjectCtx` | `InjectCtx` |
| `InjectRenderer` | extends [`ListrRendererValue`](../types/index.ListrRendererValue.md)`Renderer` |
| `InjectFallbackRenderer` | extends [`ListrRendererValue`](../types/index.ListrRendererValue.md)`FallbackRenderer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks` | [`ListrTask`](../interfaces/index.ListrTask.md)<`InjectCtx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`InjectRenderer`\>\>[] |
| `options?` | [`ListrBaseClassOptions`](../types/index.ListrBaseClassOptions.md)<`InjectCtx`, `InjectRenderer`, `InjectFallbackRenderer`\> |

#### Returns

[`Listr`](index.Listr.md)<`InjectCtx`, `InjectRenderer`, `InjectFallbackRenderer`\>

#### Defined in

src/manager.ts:41

___

### indent

▸ **indent**<`InjectCtx`\>(`tasks`, `options?`, `taskOptions?`): [`ListrTask`](../interfaces/index.ListrTask.md)<`InjectCtx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InjectCtx` | `Ctx` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks` | [`ListrTask`](../interfaces/index.ListrTask.md)<`InjectCtx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\>[] \| (`ctx?`: `InjectCtx`) => [`ListrTask`](../interfaces/index.ListrTask.md)<`InjectCtx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\>[] |
| `options?` | [`ListrBaseClassOptions`](../types/index.ListrBaseClassOptions.md)<`InjectCtx`, `Renderer`, `FallbackRenderer`\> |
| `taskOptions?` | `Omit`<[`ListrTask`](../interfaces/index.ListrTask.md)<`InjectCtx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\>, ``"task"``\> |

#### Returns

[`ListrTask`](../interfaces/index.ListrTask.md)<`InjectCtx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\>

#### Defined in

src/manager.ts:48

___

### run

▸ **run**<`InjectCtx`\>(`tasks`, `options?`): `Promise`<`InjectCtx`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InjectCtx` | `Ctx` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks` | [`ListrTask`](../interfaces/index.ListrTask.md)<`InjectCtx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\>[] |
| `options?` | [`ListrBaseClassOptions`](../types/index.ListrBaseClassOptions.md)<`InjectCtx`, `Renderer`, `FallbackRenderer`\> |

#### Returns

`Promise`<`InjectCtx`\>

#### Defined in

src/manager.ts:72

___

### getRuntime

▸ **getRuntime**(`pipetime`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pipetime` | `number` |

#### Returns

`string`

#### Defined in

src/manager.ts:91
