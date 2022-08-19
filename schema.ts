import { z } from "zod";

/* ---------------------- document ---------------------- */

// documentRead
export const documentCreateReq = z.object({
	name: z.string().min(1),
});
export const documentCreateRes = z.object({});
export type documentCreateReqType = z.infer<typeof documentCreateReq>;
export type documentCreateResType = z.infer<typeof documentCreateRes>;

// documentRead
export const documentReadReq = z.object({
	name: z.string().min(1),
});
export const documentReadRes = z.object({});

export type documentReadReqType = z.infer<typeof documentReadReq>;
export type documentReadResType = z.infer<typeof documentReadRes>;

// documentWrite
export const documentWriteReq = z.object({
	name: z.string().min(1),
	content: z.string(),
});
export const documentWriteRes = z.object({});
export type documentWriteReqType = z.infer<typeof documentWriteReq>;
export type documentWriteResType = z.infer<typeof documentWriteRes>;

// documentList
export const documentListReq = z.object({});
export const documentListRes = z.object({
	documents: z.array(
		z.object({
			name: z.string().min(1),
		})
	),
});
export type documentListReqType = z.infer<typeof documentListReq>;
export type documentListResType = z.infer<typeof documentListRes>;

/* ------------------- uniqueDocument ------------------- */

// uniqueDocumentRead
export const uniqueDocumentReadReq = z.object({
	context: z.string().min(1),
	id: z.string().min(1),
});
export const uniqueDocumentReadRes = z.object({});
export type uniqueDocumentReadReqType = z.infer<typeof uniqueDocumentReadReq>;
export type uniqueDocumentReadResType = z.infer<typeof uniqueDocumentReadRes>;

// uniqueDocumentList
export const uniqueDocumentListReq = z.object({
	context: z.string().min(1),
});
export const uniqueDocumentListRes = z.object({});
export type uniqueDocumentListReqType = z.infer<typeof uniqueDocumentListReq>;
export type uniqueDocumentListResType = z.infer<typeof uniqueDocumentListRes>;