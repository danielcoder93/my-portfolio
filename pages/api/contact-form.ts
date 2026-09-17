import { createLeadHandler } from "../../lib/lead-handler";
import { deliverLead } from "../../lib/lead-email";
export const config = { api: { bodyParser: { sizeLimit: "12kb" } }, maxDuration: 30 };
export default createLeadHandler({ deliver: deliverLead });
