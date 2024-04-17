import pandas as pd
import os
from influxdb import InfluxDBClient
from datetime import datetime
import urllib3

urllib3.disable_warnings()

# dictionary containing eigmeter host to BUILDINGID conversions 
eigs_build_dict = { "eigmeter-alpha-gamma-delta-bldg95_dept_lehigh_edu":"0095" ,
    "eigmeter-alphachiomega-bldg93_res_lehigh_edu":"0093" ,
    "eigmeter-alphaphi-bldg98_res_lehigh_edu":"0098" ,
    "eigmeter-alphatauomega-bldg99_res_lehigh_edu":"0099" ,
    "eigmeter-alumni-bldg27_dept_lehigh_edu":"0027" ,
    "eigmeter-alumnigarage-bldg26a_dept_lehigh_edu":"026a" ,
    "eigmeter-alumniparkingdeck-bldg26a_dept_lehigh_edu":"026a" ,
    "eigmeter-barnetthouse-bldg194_dept_lehigh_edu":"0194" ,
    "eigmeter-bldg101_res_lehigh_edu":"0101" ,
    "eigmeter-bldg107_res_lehigh_edu":"0107" ,
    "eigmeter-bldg8b-rm179_cc_lehigh_edu":"008b" ,
    "eigmeter-bldgh-atlass-bldg117_atlss_lehigh_edu":"0117" ,
    "eigmeter-bldgh-rm208-bldg117_atlss_lehigh_edu":"0117" ,
    "eigmeter-bldgj-bldg118_dept_lehigh_edu":"0118" ,
    "eigmeter-brodhead-bldg201_res_lehigh_edu":"0201" ,
    "eigmeter-brodheadkitchen-bldg201_res_lehigh_edu":"0201" ,
    "eigmeter-campuspolice-bldg47_dept_lehigh_edu":"0047" ,
    "eigmeter-cent1-bldg58_dept_lehigh_edu":"0058" ,
    "eigmeter-cent2-bldg51-s05_res_lehigh_edu":"0051" ,
    "eigmeter-chandler-bldg17_infra_lehigh_edu":"0017" ,
    "eigmeter-chi-phi-bldg105_dept_lehigh_edu":"0105" ,
    "eigmeter-chipsi-bldg84_res_lehigh_edu":"0084" ,
    "eigmeter-chr-1500chiller-bldg10_dept_lehigh_edu":"0010" ,
    "eigmeter-chr-750chiller-bldg10_dept_lehigh_edu" : "0010",
    "eigmeter-chr-main-bldg10_dept_lehigh_edu":"0010" ,
    "eigmeter-chr-mcc-bldg10_dept_lehigh_edu":"0010" ,
    "eigmeter-chr-powerpanel-bldg10_dept_lehigh_edu":"0010" ,
    "eigmeter-chr-transfereswitch-bldg10_dept_lehigh_edu":"0010" ,
    "eigmeter-christmassaucon_dept_lehigh_edu":"0014" ,
    "eigmeter-coppee-bldg33_dept_lehigh_edu":"0033" ,
    "eigmeter-coxehall-bldg32_dept_lehigh_edu":"0032" ,
    "eigmeter-delta-chi-bld86_dept_lehigh_edu":"0086" ,
    "eigmeter-deltaupsilon-bldg81_res_lehigh_edu":"0081" ,
    "eigmeter-dialoguecntr-bldg41_dept_lehigh_edu":"0041" ,
    "eigmeter-dravohouse-bldg65_res_lehigh_edu":"0065" ,
    "eigmeter-drinker-bldg64_res_lehigh_edu":"0064" ,
    "eigmeter-drownhall-bldg35_dept_lehigh_edu":"0035" ,
    "eigmeter-ewfm-mart1-bldg008_cc_lehigh_edu":"0008" ,
    "eigmeter-ewfm-mart2-bldg008_cc_lehigh_edu":"0008" ,
    "eigmeter-fairchildlab-bldg016a_dept_lehigh_edu":"016a" ,
    "eigmeter-farrington-johnnys_res_lehigh_edu":"0202" ,
    "eigmeter-farrington-mailcenter_res_lehigh_edu":"0202" ,
    "eigmeter-farrington-thecup_res_lehigh_edu":"0202" ,
    "eigmeter-farringtonsq-bldg202_dept_lehigh_edu":"0202" ,
    "eigmeter-farringtonsqparking-bldg2_dept_lehigh_edu":"0002" ,
    "eigmeter-frat-bldg94_res_lehigh_edu":"0094" ,
    "eigmeter-fritz1_ce_lehigh_edu":"0013" ,
    "eigmeter-fritz2_ce_lehigh_edu":"0013" ,
    "eigmeter-gammaphibeta-bldg100_res_lehigh_edu":"0100" ,
    "eigmeter-gracechiller-bldg39_dept_lehigh_edu":"0039" ,
    "eigmeter-gracehall-bldg39_dept_lehigh_edu":"0039" ,
    "eigmeter-house104-bldg104_res_lehigh_edu":"0104" ,
    "eigmeter-iacocca-bus-bldg111_dept_lehigh_edu":"0111" ,
    "eigmeter-iacocca-nw-bldg111_dept_lehigh_edu":"0111" ,
    "eigmeter-iacocca-se-bldg111_dept_lehigh_edu":"0111" ,
    "eigmeter-iacocca-sw-bldg111_dept_lehigh_edu":"0111" ,
    "eigmeter-ideal-bldg42_dept_lehigh_edu":"0042" ,
    "eigmeter-johnsonhall-bldg36_dept_lehigh_edu":"0036" ,
    "eigmeter-jordan-hall-bldg115_dept_lehigh_edu":"0115" ,
    "eigmeter-kappa-alpha-theta-bldg106_dept_lehigh_edu":"0106" ,
    "eigmeter-kappaalpha-bldg85_res_lehigh_edu":"0085" ,
    "eigmeter-kappasigma-bldg87_res_lehigh_edu":"0087" ,
    "eigmeter-lamberton-bldg34_dept_lehigh_edu":"0034" ,
    "eigmeter-linderman-bldg31_dept_lehigh_edu":"0030" ,
    "eigmeter-maginnes-bldg009_dept_lehigh_edu":"0009" ,
    "eigmeter-mm-bldg49_res_lehigh_edu":"0049" ,
    "eigmeter-mm-bldg67_res_lehigh_edu":"0067" ,
    "eigmeter-mtc-d-bldg114_dept_lehigh_edu":"0114" ,
    "eigmeter-mtcd-bldg114_dept_lehigh_edu":"0114" ,
    "eigmeter-mtn-bldg-c_dept_lehigh_edu":"0113" ,
    "eigmeter-mudd-bldg6_dept_lehigh_edu":"0006" ,
    "eigmeter-neville-bldg6a_dept_lehigh_edu":"006a" ,
    "eigmeter-nrh-rma327_infra_lehigh_edu":"0069" ,
    "eigmeter-nrh-rmc231_infra_lehigh_edu":"0069" ,
    "eigmeter-packard-lab-bldg19_dept_lehigh_edu":"0019" ,
    "eigmeter-packerchapel-bldg18_dept_lehigh_edu":"0018" ,
    "eigmeter-phi-kappa-theta-bld88_dept_lehigh_edu":"0088" ,
    "eigmeter-phideltatheta-bldg97_res_lehigh_edu":"0097" ,
    "eigmeter-phikappaalpha-bldg89_res_lehigh_edu":"0089" ,
    "eigmeter-philosophy-bldg15_dept_lehigh_edu":"0015" ,
    "eigmeter-phisigmakappa-bldg90_res_lehigh_edu":"0090" ,
    "eigmeter-physics-bldg16_dept_lehigh_edu":"0016" ,
    "eigmeter-pibetaphi-bldg83_res_lehigh_edu":"0083" ,
    "eigmeter-price-bldg40_dept_lehigh_edu":"0040" ,
    "eigmeter-pricehall-bldg40_dept_lehigh_edu":"0040" ,
    "eigmeter-psiupsilon-bldg80_res_lehigh_edu":"0080" ,
    "eigmeter-rathbone-bldg63_dept_lehigh_edu":"0063" ,
    "eigmeter-rauch-field-house_dept_lehigh_edu":"0123" ,
    "eigmeter-rauchrbcchiller_dept_lehigh_edu":"0037" ,
    "eigmeter-rbc-bldg37_dept_lehigh_edu":"0037" ,
    "eigmeter-richards-bldg66_res_lehigh_edu":"0066" ,
    "eigmeter-sayerparka-bldg109a_res_lehigh_edu":"109a" ,
    "eigmeter-sayerparkb-bldg109b_res_lehigh_edu":"109b" ,
    "eigmeter-sayerparkc-bldg109c_res_lehigh_edu":"109c" ,
    "eigmeter-sayerparkd-bldg109d_res_lehigh_edu":"109d" ,
    "eigmeter-sigmachi-bldg102_res_lehigh_edu":"0102" ,
    "eigmeter-sigmaphiepsilon-bldg92_res_lehigh_edu":"0092" ,
    "eigmeter-sinclair-bldg007_dept_lehigh_edu":"0007" ,
    "eigmeter-sinclairopto-bldg7_dept_lehigh_edu":"0007" ,
    "eigmeter-stabler_dept_lehigh_edu":"0124" ,
    "eigmeter-steps1_dept_lehigh_edu":"009a" ,
    "eigmeter-taylor-bldg68_res_lehigh_edu":"0068" ,
    "eigmeter-taylorgym-bldg38_dept_lehigh_edu":"0038" ,
    "eigmeter-taylorhall-bldg68_res_lehigh_edu":"0068" ,
    "eigmeter-tennis-bldg128_dept_lehigh_edu":"0128" ,
    "eigmeter-theta-chi_dept_lehigh_edu":"0091" ,
    "eigmeter-thetaxi-bldg96_res_lehigh_edu":"0096" ,
    "eigmeter-track-bldg130_dept_lehigh_edu":"0130" ,
    "eigmeter-trembley-a-bldg71_res_lehigh_edu":"0071" ,
    "eigmeter-trembley-b-bldg72_res_lehigh_edu":"0072" ,
    "eigmeter-trembley-c-bldg73_res_lehigh_edu":"0073" ,
    "eigmeter-trembley-d-bldg74_res_lehigh_edu":"0074" ,
    "eigmeter-trembley-e-bldg75_res_lehigh_edu":"0075" ,
    "eigmeter-trembley-f-bldg76_res_lehigh_edu":"0076" ,
    "eigmeter-trembley-g-bldg77_res_lehigh_edu":"0077" ,
    "eigmeter-ulrich-fields-151_dept_lehigh_edu":"0151" ,
    "eigmeter-universtycenter-bldg29_dept_lehigh_edu":"0029" ,
    "eigmeter-varsity_dept_lehigh_edu":"0121" ,
    "eigmeter-whitaker-bldg5_mat_lehigh_edu":"0005" ,
    "eigmeter-wilbur-bldg12_dept_lehigh_edu":"0012" ,
    "eigmeter-williams_dept_lehigh_edu":"0031" ,
    "eigmeter-zac-bldg49_dept_lehigh_edu":"0049" ,
    "eigmeter-zacgarage-bldg48_dept_lehigh_edu":"0048" ,
    "eigmeter1-shm-bldg69_infra_lehigh_edu":"0069" ,
    "eigmeter2-shm-bldg69_infra_lehigh_edu":"0069" ,
    "eigmeter3-shm-bldg69_infra_lehigh_edu":"0069" ,
    "eigmetera-bldgh-bldg117_atlss_lehigh_edu":"0117" ,
    "eigmeterb-bldgh-bldg117_atlss_lehigh_edu":"0117" }

#connect to the influxDB 
client = InfluxDBClient(host='webapps.lehigh.edu', path ='eig_api', port=443, ssl=True, username='eig_api', password='XChsKsbRu7N1AlrC', database='statistics')

#query data 
# query = 'SELECT host, mean_pavwat from ( SELECT  MEAN(\"pavwat\") as mean_pavwat from eig WHERE time > now() - 15m GROUP BY *)'
query = 'SELECT host, time, pavwat FROM eig WHERE time > now() - 15m '
reg_query=client.query(query)

#convert data to usable format
cpu_points = list(reg_query.get_points(measurement='eig'))

print(len(cpu_points))
#create pandas dataframe
building_metadata = []
# Only take the first out 15 ish minutes by using 127. 
for i in range(127):
        # print(cpu_points[i], "\n")
        if(eigs_build_dict.get(cpu_points[i]["host"]) != None):
            building_metadata.append([ eigs_build_dict.get(cpu_points[i]["host"]), cpu_points[i]["time"], cpu_points[i]["pavwat"]] )
        if(eigs_build_dict.get(cpu_points[i]["host"]) == None):
            print("ERROR : ", eigs_build_dict.get(cpu_points[i]["host"])," == ", cpu_points[i]["host"] )
            exit(0) 


df = pd.DataFrame(building_metadata, columns = ['BUILDINGID', 'time', 'Watts'])
df = df.groupby('BUILDINGID', as_index=False).agg(Watts = ('Watts', 'sum'))
df['time'] = cpu_points[0]["time"]
print(df)



now = datetime.now().strftime('%Y%m%d%H%M%S')
temp_csv_name = f'temp_{now}.csv'
temp_csv_path = os.path.join(os.getcwd(), temp_csv_name)
# print(temp_csv_path)
# print(temp_csv_name)

df.to_csv(temp_csv_name)